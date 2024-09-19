using DoublePartnersApplication.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Rol.Queries.GetRol
{
    public class GetRolQuery : IRequest<List<RolVm>>
    {
        public GetRolQuery(int? id)
        {
            Id = id;
        }
        public int? Id { get; set; }
    }
}
