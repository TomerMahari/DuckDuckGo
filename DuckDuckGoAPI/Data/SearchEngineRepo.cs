using DuckDuckGoAPI.Models;
using System.Text;
using Newtonsoft.Json;

namespace DuckDuckGoAPI.Data
{
    class SearchEngineRepo : ISearchEngineRepo
    {
        static readonly HttpClient client = new HttpClient();
        static readonly string filePath = "asset/searchHistory.txt";

        public IEnumerable<RelatedTopic> Query(string q, bool skipWrite)
        {
            List<RelatedTopic> rt = new List<RelatedTopic>();
            if (string.IsNullOrEmpty(q))
                return rt;
            string response = GetDDGQueryRes(q);
            if (string.IsNullOrEmpty(response))
            {
                return rt;
            }
            if (!skipWrite)//if its a re-search dont right it
                SaveSearchHistory(q);
            DDGResponse m = JsonConvert.DeserializeObject<DDGResponse>(response);
            if (m != null && m.RelatedTopics != null)
                rt = m.RelatedTopics;
            return rt;
        }
        private string GetDDGQueryRes(string q)
        {
            // Call asynchronous network methods in a try/catch block to handle exceptions.
            try
            {
                StringBuilder sb = new StringBuilder();
                sb.AppendFormat("https://api.duckduckgo.com/?q={0}&format=json", q);//move to config file
                string url = sb.ToString();
                var response = client.GetStringAsync(new Uri(url)).Result;
                return response;
            }
            catch (HttpRequestException e)
            {
                //put logger
                return "";
            }
        }
        private void SaveSearchHistory(string q)
        {
            string path = Path.GetFullPath(filePath);
            List<string> lastHistory = GetSearchHistory();
            lastHistory.Add(q);
            using (StreamWriter sw = File.CreateText(path))
            {
                foreach (string s in lastHistory)
                {
                    sw.WriteLine(s);

                }
            }
        }
        public List<string> GetSearchHistory()//find by user guid
        {
            List<string> searchHistory = new List<string>();
            string path = Path.GetFullPath(filePath);

            if (File.Exists(path))
            {
                string[] lines = System.IO.File.ReadAllLines(path);
                foreach (string line in lines)
                {
                    searchHistory.Add(line);
                }
            }
            return searchHistory;
        }
    }
}