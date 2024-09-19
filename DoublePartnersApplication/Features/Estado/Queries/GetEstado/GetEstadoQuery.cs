using DoublePartnersApplication.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Estado.Queries.GetEstado
{
    public class GetEstadoQuery : IRequest<List<EstadoVm>>
    {
        public GetEstadoQuery(int? id)
        {
            Id = id;
        }
        public int? Id { get; set; }
    }
}
