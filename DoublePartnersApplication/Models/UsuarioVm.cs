using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Models
{
    public class UsuarioVm
    {/// <summary>
    /// Modelo de datos para los usuarios
    /// </summary>
        public int Id { get; set; }
        public string nombreUsuario { get; set; }
        public string apellidousuario { get; set; }
        public string loginUsuario { get; set; }
        public string contrasenaUsuario { get; set; }
        public int idRol { get; set; }
        public string createDate { get; set; }
        public string createUser { get; set; }
        public string modifyDate { get; set; }
        public string modifyUser { get; set; }
        public string token { get; set; }

    }
}
