using DuckDuckGoAPI.Models;

namespace DuckDuckGoAPI.Data
{ 
    public  interface ISearchEngineRepo
    {
        IEnumerable<RelatedTopic> Query(string q, bool skipWrite);
        List<string> GetSearchHistory();
    }
    
}