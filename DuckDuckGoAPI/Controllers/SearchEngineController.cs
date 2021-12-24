using DuckDuckGoAPI.Data;
using DuckDuckGoAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace DuckDuckGoAPI.Controllers
{
    [Route("api/SearchEngine"),]
    [ApiController]
    public class SearchEngineController : ControllerBase
    {
        private readonly ISearchEngineRepo _repository;

        public SearchEngineController(ISearchEngineRepo repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public ActionResult<IEnumerable<RelatedTopic>> Get(string query, bool skipWrite = false)
        {
            return Ok(_repository.Query(query,skipWrite));
        }
        
        [HttpGet("History")]
        public ActionResult<List<string>> GetHistory()
        {
            return Ok(_repository.GetSearchHistory());
        }
    }
}