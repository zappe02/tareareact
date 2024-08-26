from fastapi import FastAPI

app = FastAPI()

@app.get("/personas")
def get_personas():
    # Ejemplo de datos, deberías obtenerlos de una base de datos o un servicio
    return [
        {"nombre": "Juan", "edad": 30, "ocupacion": "Ingeniero"},
        {"nombre": "Ana", "edad": 25, "ocupacion": "Diseñadora"},
        {"nombre": "Pedro", "edad": 40, "ocupacion": "Profesor"},
    ]
