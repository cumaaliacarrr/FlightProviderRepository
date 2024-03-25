using FlightProvider2.MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FlightProvider2.MVC.Controllers
{
    public class FlightController : Controller
    {
        // GET: Flight
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Detail(string flightNumber,string from,string destination)
        {
            var model = new DetailViewModel();
            model.FlightNumber = flightNumber;
            model.From = from;
            model.Destination = destination;
            return View(model);
        }
    }
}