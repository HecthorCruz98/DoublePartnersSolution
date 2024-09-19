using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Usuario.Commands.DeleteUsuario
{
    public class DeleteUsuarioCommand :IRequest<bool>
    {
        public DeleteUsuarioCommand(int id)
        {
            Id = id;
        }
        public int Id { get; set; }
    }
}
