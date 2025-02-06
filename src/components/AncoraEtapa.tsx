import { Link } from "react-router-dom";

interface AncoraEtapaProps {
    href: string;
    texto: string;
}

function AncoraEtapa({ href, texto }: AncoraEtapaProps) {
    return (
        <Link to={href} className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-300">
            {texto}
        </Link>
    );
}

export default AncoraEtapa;
