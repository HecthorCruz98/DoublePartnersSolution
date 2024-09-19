using DoublePartnersApplication.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Usuario.Queries.GetUsuario
{
    public class GetUsuarioQuery : IRequest<List<UsuarioVm>>
    {
        public GetUsuarioQuery(int? id)
        {
            Id = id;
        }
        public int? Id { get; set; }
    }
}
