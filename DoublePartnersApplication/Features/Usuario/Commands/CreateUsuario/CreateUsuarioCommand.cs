using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Usuario.Commands.CreateUsuario
{
    public class CreateUsuarioCommand : IRequest<bool>
    {
        public string nombreUsuario { get; set; }
        public string apellidousuario { get; set; }
        public string loginUsuario { get; set; }
        public string contrasenaUsuario { get; set; }
        public int idRol { get; set; }
        public string createDate { get; set; }
        public string createUser { get; set; }
    }
}
