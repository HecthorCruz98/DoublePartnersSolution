using DoublePartnersDomain.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersDomain
{
    public class Tarea : Entity
    {
        public string descripcionTarea { get; set; }
        public int idEstado { get; set; }
        [ForeignKey("idEstado")]
        public Estado estado { get; set; }
        public int idUsuario { get; set; }
        [ForeignKey("idUsuario")]
        public Usuario usuario { get; set; }
    }
}
