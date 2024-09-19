using DoublePartnersApplication.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Tareas.Queries.GetTarea
{
    public class GetTareaQuery : IRequest<List<TareaVm>>
    {
        public GetTareaQuery(int? id)
        {
            Id = id;
        }
        public int? Id { get; set; }
    }
}
