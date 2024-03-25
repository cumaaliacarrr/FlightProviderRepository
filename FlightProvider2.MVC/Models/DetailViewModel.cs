using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FlightProvider2.MVC.Models
{
    public class DetailViewModel
    {
        public string FlightNumber { get; set; }
        public string From { get; set; }
        public string Destination{ get; set; }
    }
}