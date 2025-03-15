import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Definición de la interfaz para los datos de noticias
interface NewsItem {
  mal_id: number;
  title: string;
  date: string;
  author_username: string;
  forum_url: string;
  images: {
    jpg: {
      image_url: string;
    }
  };
  excerpt: string;
  comments: number;
}

interface ApiResponse {
  data: NewsItem[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  }
}
const API_BASE = 'https://api.jikan.moe/v4/anime/1/news';

export default function Contenido() {
  const [noticias, setNoticias] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNoticias = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get<ApiResponse>(API_BASE);
      setNoticias(response.data.data);
      setError(null);
    } catch (err) {
      console.error('Error al obtener noticias:', err);
      setError('Error al cargar las noticias. Por favor, intenta de nuevo más tarde.');
      setNoticias([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNoticias();
  }, [fetchNoticias]);

  return (
    <div className='p-base'>
      <h1 className="text-2xl font-bold mb-6">Noticias de Anime</h1>

      {loading && <p className="text-center">Cargando noticias...</p>}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {!loading && !error && noticias.length === 0 && (
        <p className="text-center">No hay noticias disponibles.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticias.map((noticia) => (
          <div key={noticia.mal_id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {noticia.images?.jpg?.image_url && (
              <img
                src={noticia.images.jpg.image_url}
                alt={noticia.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{noticia.title}</h2>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{noticia.comments} comentarios</span>
                <a
                  href={noticia.forum_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Leer más
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}