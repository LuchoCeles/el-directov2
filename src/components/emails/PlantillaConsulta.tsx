import {
  Body,
  Column,
  Container,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import type { CSSProperties } from "react";
import { empresa, sucursales, urlSitio } from "@/lib/empresa";
import { textoAutorizacionDatos } from "@/lib/contacto/avisoPrivacidad";

const colorAzul = "#064079";
const colorAzulClaro = "#0959AA";
const colorNavy = "#042649";
const colorSutil = "#EFF6FD";
const colorBorde = "#E5E9F0";
const colorTextoMuted = "#64748B";
const colorFondo = "#F2F5F9";

interface PropsPlantillaConsulta {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  mensaje: string;
  fechaRecepcionUtc: string;
}

interface PropsFilaConsulta {
  etiqueta: string;
  valor: string;
  esEnlace?: boolean;
}

const FilaConsulta = ({ etiqueta, valor, esEnlace }: PropsFilaConsulta) => (
  <Section style={estilosFila}>
    <Text style={estilosEtiqueta}>
      {etiqueta.toUpperCase()}
    </Text>
    {esEnlace ? (
      <Link href={`mailto:${valor}`} style={estilosValorEnlace}>
        {valor}
      </Link>
    ) : (
      <Text style={estilosValor}>
        {valor}
      </Text>
    )}
  </Section>
);

const estilosFila: CSSProperties = {
  padding: "14px 0",
};

const estilosEtiqueta: CSSProperties = {
  margin: "0 0 4px 0",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "1.2px",
  color: colorTextoMuted,
};

const estilosValor: CSSProperties = {
  margin: "0",
  fontSize: "15px",
  fontWeight: 500,
  color: "#1F2A37",
};

const estilosValorEnlace: CSSProperties = {
  fontSize: "15px",
  fontWeight: 500,
  color: colorAzul,
};

const PlantillaConsulta = ({
  nombre,
  empresa: empresaCliente,
  correo,
  telefono,
  mensaje,
  fechaRecepcionUtc,
}: PropsPlantillaConsulta) => (
  <Html lang="es">
    <Preview>
      Nueva consulta de {nombre} desde el sitio web de {empresaCliente || empresa.nombre}
    </Preview>
    <Body style={{ backgroundColor: colorFondo, fontFamily: "'Segoe UI', Arial, sans-serif", margin: 0, padding: "0" }}>
      <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 24px" }}>
        <Section style={estilosEncabezado}>
          <Row>
            <Column width="80" style={{ verticalAlign: "middle" }}>
              <div style={estilosChipLogo}>
                <Img
                  src={`${urlSitio}${empresa.logo}`}
                  alt={empresa.nombre}
                  width={48}
                  height={48}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    width: "48px",
                    height: "48px",
                  }}
                />
              </div>
            </Column>

            <Column style={{ paddingLeft: "15px", verticalAlign: "middle" }}>
              <Heading style={estilosTituloEmpresa}>
                {empresa.nombreCompleto}
              </Heading>

              <Text style={estilosSubtituloEmpresa}>
                Transporte directo · Rosario – Mar del Plata
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={estilosTarjeta}>
          <Section style={estilosBadge}>
            <Text style={estilosTextoBadge}>
              Nueva consulta desde el sitio web
            </Text>
          </Section>

          <FilaConsulta etiqueta="Nombre" valor={nombre} />
          {empresaCliente ? (
            <>
              <Hr style={estilosDivisor} />
              <FilaConsulta etiqueta="Empresa" valor={empresaCliente} />
            </>
          ) : null}
          <Hr style={estilosDivisor} />
          <FilaConsulta etiqueta="Email" valor={correo} esEnlace />
          {telefono ? (
            <>
              <Hr style={estilosDivisor} />
              <FilaConsulta etiqueta="Teléfono" valor={telefono} />
            </>
          ) : null}
          <Hr style={estilosDivisor} />

          <Section style={estilosCajaMensaje}>
            <Text style={{ ...estilosEtiqueta, marginBottom: "8px" }}>
              MENSAJE
            </Text>
            <Text style={estilosTextoMensaje}>
              {mensaje}
            </Text>
          </Section>
          <Hr style={estilosDivisor} />
          <FilaConsulta etiqueta="Fecha de recepción (UTC)" valor={fechaRecepcionUtc} />
          <Hr style={estilosDivisor} />
          <FilaConsulta etiqueta="Declaración de autorización recibida" valor={textoAutorizacionDatos} />
        </Section>

        <Section style={estilosPie}>
          <Text style={estilosTituloPie}>
            {empresa.nombreCompleto}
          </Text>
          <div>
            {sucursales.map((sucursal) => (
              <Text key={sucursal.nombre} style={estilosLineaPie}>
                {sucursal.nombre}: {sucursal.telefono.join(" · ")} · {sucursal.correo}
              </Text>
            ))}
          </div>
          <Text style={estilosLegalPie}>
            © {new Date().getFullYear()} {empresa.nombreCompleto}. Todos los derechos reservados.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const estilosEncabezado: CSSProperties = {
  background: `linear-gradient(135deg, ${colorAzul} 0%, ${colorAzulClaro} 100%)`,
  borderRadius: "12px 12px 0 0",
  padding: "28px 40px",
};

const estilosChipLogo: CSSProperties = {
  width: "48px",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  padding: "8px",
};

const estilosTituloEmpresa: CSSProperties = {
  margin: "0",
  fontSize: "20px",
  fontWeight: 700,
  color: "#FFFFFF",
};

const estilosSubtituloEmpresa: CSSProperties = {
  margin: "2px 0 0 0",
  fontSize: "12px",
  fontWeight: 400,
  color: "rgba(255, 255, 255, 0.85)",
};

const estilosTarjeta: CSSProperties = {
  backgroundColor: "#FFFFFF",
  border: `1px solid ${colorBorde}`,
  borderTop: "none",
  borderRadius: "0 0 12px 12px",
  padding: "8px 40px 32px 40px",
};

const estilosBadge: CSSProperties = {
  marginTop: "24px",
};

const estilosTextoBadge: CSSProperties = {
  margin: "0",
  display: "inline-block",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "1.4px",
  textTransform: "uppercase",
  backgroundColor: colorSutil,
  color: colorAzul,
  borderRadius: "999px",
  padding: "6px 14px",
};

const estilosDivisor: CSSProperties = {
  border: "none",
  borderTop: `1px solid ${colorBorde}`,
  margin: "0",
};

const estilosCajaMensaje: CSSProperties = {
  marginTop: "20px",
  padding: "16px 20px",
  borderRadius: "8px",
  backgroundColor: colorSutil,
  borderLeft: `4px solid ${colorAzul}`,
};

const estilosTextoMensaje: CSSProperties = {
  margin: "0",
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#1F2A37",
  whiteSpace: "pre-wrap",
};

const estilosPie: CSSProperties = {
  backgroundColor: colorNavy,
  borderRadius: "0 0 12px 12px",
  marginTop: "16px",
  padding: "24px 40px",
  textAlign: "left",
};

const estilosTituloPie: CSSProperties = {
  margin: "0 0 8px 0",
  fontSize: "14px",
  fontWeight: 700,
  color: "#FFFFFF",
};

const estilosLineaPie: CSSProperties = {
  margin: "0 0 4px 0",
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.75)",
};

const estilosLegalPie: CSSProperties = {
  margin: "12px 0 0 0",
  fontSize: "11px",
  color: "rgba(255, 255, 255, 0.5)",
};

export default PlantillaConsulta;
