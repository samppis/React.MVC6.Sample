using Microsoft.AspNet.Mvc;

namespace React.MVC6.Sample.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
