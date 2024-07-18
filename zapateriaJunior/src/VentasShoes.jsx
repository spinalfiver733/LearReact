export const VentasShoes = () =>{
    return(
        <> 
            <div className="contenedorPrincipal">
                    <div className="headerCard">
                        <h1>Ventas</h1>
                    </div>
                    <div className="bodyCard">
                        <div className="row">
                            <label >Marca:</label>
                            <input type="text" />
                        </div>
                        <div className="row">
                            <label >Número:</label>
                            <input type="text" />
                        </div>
                        <div className="row">
                            <label >Color:</label>
                            <input type="text" />
                        </div>
                            <div className="row">
                            <label >Precio:</label>
                        <input type="text" />
                        </div>
                        <div className="row">
                            <label >Vendedor:</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
        </>
    );
}