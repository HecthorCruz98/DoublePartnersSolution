using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Models
{
    public class EstadoVm
    {
        public int Id { get; set; }
        public string descripcionEstado { get; set; }
        public string createDate { get; set; }
        public string createUser { get; set; }
        public string modifyDate { get; set; }
        public string modifyUser { get; set; }

    }
}
