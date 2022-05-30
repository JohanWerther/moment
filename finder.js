const response = `<?xml version="1.0" encoding="utf-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<SOAP-ENV:Body>
		<APIExterno.CONSULTACOTIZACIONESResponse xmlns="KATI">
			<Sdt_cotizaciones>
				<SDT_CotizacionesItem xmlns="KATI">
					<MonedaCod>2222</MonedaCod>
					<MonedaSimb>U$S</MonedaSimb>
					<MonedaDsc>Dólares Americanos</MonedaDsc>
					<CotizacionCompra>42.9000</CotizacionCompra>
					<CotizacionVenta>45.1000</CotizacionVenta>
				</SDT_CotizacionesItem>
				<SDT_CotizacionesItem xmlns="KATI">
					<MonedaCod>1111</MonedaCod>
					<MonedaSimb>EUR</MonedaSimb>
					<MonedaDsc>EUROS</MonedaDsc>
					<CotizacionCompra>50.8000</CotizacionCompra>
					<CotizacionVenta>56.3000</CotizacionVenta>
				</SDT_CotizacionesItem>
				<SDT_CotizacionesItem xmlns="KATI">
					<MonedaCod>9800</MonedaCod>
					<MonedaSimb>UI</MonedaSimb>
					<MonedaDsc>Unidades Indexadas</MonedaDsc>
					<CotizacionCompra>4.9488</CotizacionCompra>
					<CotizacionVenta>4.9488</CotizacionVenta>
				</SDT_CotizacionesItem>
			</Sdt_cotizaciones>
		</APIExterno.CONSULTACOTIZACIONESResponse>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`


function getValues (badge, transaction) {
    const badgeIndex = response.indexOf(badge);
    const transactionIndex = response.indexOf(transaction, badgeIndex);
    const transactionOpen = response.indexOf(">", transactionIndex) + 1;
    const transactionClose = response.indexOf("</", transactionIndex);
    const badgeValue = response.substring(transactionOpen, transactionClose)
    return badgeValue;
}

const compraDolares = getValues("Dólares", "Compra");
const ventaDolares = getValues("Dólares", "Venta");
const compraEuros = getValues("EUROS", "Compra");
const ventaEuros = getValues("EUROS", "Venta");

console.log(compraDolares, ventaDolares, compraEuros, ventaEuros);


