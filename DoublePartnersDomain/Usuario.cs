using DoublePartnersDomain.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersDomain
{
    public class Usuario : Entity
    {
        public string nombreUsuario { get; set; }
        public string apellidousuario { get; set; }
        public string loginUsuario { get; set; }
        public string contrasenaUsuario { get; set; }
        public int idRol { get; set; }
        [ForeignKey("idRol")]
        public Rol rol { get; set; }

    }
}
