function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51968193591?text=Hola%20Marcio,%20deseo%20información%20sobre%20sus%20seguros."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#25D366",
        color: "white",
        padding: "12px 18px",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        zIndex: 9999,
        transition: "0.3s",
      }}
    >
      <span
        style={{
          fontSize: "30px",
        }}
      >
        💬
      </span>

      <span
        style={{
          fontSize: "15px",
        }}
      >
        ¿Necesitas asesoría?
      </span>
    </a>
  );
}

export default WhatsAppButton;