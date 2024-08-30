using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using yellowCat.Model;


namespace yellowCat.Data.Respositories
{
    public interface IProductosRepository
    {
        Task<IEnumerable<Productos>> GetProductos();
        Task<Productos> GetProductosDetails(int id);
        Task<bool> InsertProducto(Productos productos);
        Task<bool> UpdateProducto(Productos productos);
        Task<bool> DeleteProducto(Productos productos);
    }
}
