INSERT INTO public.categorias( descripcion, estado) VALUES ('Procesador', TRUE);
INSERT INTO public.categorias( descripcion, estado) VALUES ('GPU', TRUE);
INSERT INTO public.categorias( descripcion, estado) VALUES ('Fuente de Poder', TRUE);
INSERT INTO public.categorias( descripcion, estado) VALUES ('Tarjeta Madre', TRUE);
INSERT INTO public.categorias( descripcion, estado) VALUES ('RAM', TRUE);
INSERT INTO public.categorias( descripcion, estado) VALUES ('Ventiladores', TRUE);
INSERT INTO public.categorias( descripcion, estado) VALUES ('Gabinete', TRUE);
INSERT INTO public.categorias( descripcion, estado) VALUES ('Cables', TRUE);
INSERT INTO public.categorias( descripcion, estado) VALUES ('Dispositivo de Entrada', TRUE);
INSERT INTO public.categorias( descripcion, estado) VALUES ('Dispositivos de Salida', TRUE);

INSERT INTO public.marcas( descripcion, estado) VALUES ('Asus', TRUE);
INSERT INTO public.marcas( descripcion, estado) VALUES ('AMD', TRUE);
INSERT INTO public.marcas( descripcion, estado) VALUES ('Intel', TRUE);
INSERT INTO public.marcas( descripcion, estado) VALUES ('ASRock', TRUE);
INSERT INTO public.marcas( descripcion, estado) VALUES ('MSI', TRUE);
INSERT INTO public.marcas( descripcion, estado) VALUES ('GIGABYTE', TRUE);
INSERT INTO public.marcas( descripcion, estado) VALUES ('EVGA', TRUE);
INSERT INTO public.marcas( descripcion, estado) VALUES ('CORSAIR', TRUE);
INSERT INTO public.marcas( descripcion, estado) VALUES ('Cooler Master', TRUE);
INSERT INTO public.marcas( descripcion, estado) VALUES ('NVIDIA', TRUE);

INSERT INTO public.productos( nombre, id_marca, id_categoria, estado) VALUES ('Ryzen 7', 2, 1, TRUE);
INSERT INTO public.productos( nombre, id_marca, id_categoria, estado) VALUES ('Ryzen 5', 2, 1, TRUE);
INSERT INTO public.productos( nombre, id_marca, id_categoria, estado) VALUES ('Ryzen 3', 2, 1, TRUE);
INSERT INTO public.productos( nombre, id_marca, id_categoria, estado) VALUES ('Ryzen 9', 2, 1, TRUE);