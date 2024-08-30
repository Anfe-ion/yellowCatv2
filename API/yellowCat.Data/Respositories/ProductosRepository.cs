using Dapper;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using yellowCat.Model;

namespace yellowCat.Data.Respositories
{
    public class ProductosRepository : IProductosRepository
    {
        private readonly MySQLConfiguration _connectionString;
        public ProductosRepository(MySQLConfiguration connectionString)
        {
            _connectionString = connectionString;
        }

        protected MySqlConnection dbConnection()
        {
            return new MySqlConnection(_connectionString.ConnectionString); 
        }

        public async Task<bool> DeleteProducto(Productos productos)
        {
            var db = dbConnection();
            var sql = @"DELETE FROM Productos WHERE ProductoID = @Id";

            var result = await db.ExecuteAsync(sql, new {Id = productos.ProductoID});

            return result > 0;
        }

        public async Task<IEnumerable<Productos>> GetProductos()
        {
            var db = dbConnection();
            var sql = @"SELECT * FROM Productos";
            return await db.QueryAsync<Productos>(sql, new { });
        }

        public async Task<Productos> GetProductosDetails(int id)
        {
            var db = dbConnection();
            var sql = @"SELECT * FROM PRODUCTOS WHERE ProductoID = @Id";
            return await db.QueryFirstOrDefault(sql, new { Id = id });
        }

        public async Task<bool> InsertProducto(Productos productos)
        {
            var db = dbConnection();
            var sql = @"UPDATE Productos
                        SET Nombre = @Nombre, Descripcion = @Descripcion,, Precio = @Precio, ImgURL = @ImgURL, Stock = @Stock, CategoriaID = @CategoriaID
                        WHERE ProductoID = @ProductoID";
            var result = await db.ExecuteAsync(sql, new { productos.Nombre, productos.Descripcion, productos.Precio, productos.ImgURL, productos.Stock, productos.CategoriaID });

            return result > 0;
        }

        public async Task<bool> UpdateProducto(Productos productos)
        {
            var db = dbConnection();
            var sql = @"INSERT INTO Productos(Nombre, Descripcion, Precio, ImgURL, Stock, CategoriaID)
                        VALUES(@Nombre, @Descripcion, @Precio, @ImgURL, @Stock, @CategoriaID)";
            var result = await db.ExecuteAsync(sql, 
                new { productos.ProductoID, productos.Nombre, productos.Descripcion, productos.Precio, productos.ImgURL, productos.Stock, productos.CategoriaID });

            return result > 0;
        }
    }
}
