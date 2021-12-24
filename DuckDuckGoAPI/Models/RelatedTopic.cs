
namespace DuckDuckGoAPI.Models
{
    public class RelatedTopic
    {
        public string FirstURL { get; set; }
        public Icon Icon { get; set; }
        public string Result { get; set; }
        public string Text { get; set; }
        public string Name { get; set; }
        public List<Topic> Topics { get; set; }
    }
}