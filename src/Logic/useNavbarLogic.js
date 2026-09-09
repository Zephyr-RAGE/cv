import { useState, useEffect } from "react";

export function useNavbarLogic() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  // Cerrar menú automáticamente al redimensionar pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuAbierto(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { menuAbierto, toggleMenu };
}
