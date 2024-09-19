using DoublePartnersApplication.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Login.Commands.CreateLogin
{
    public class CreateLoginCommand : IRequest<UsuarioVm>
    {
        public string UsuarioLogin { get; set; }
        public string Contrasena { get; set; }
    }
}
