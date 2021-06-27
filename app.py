from flask import Flask,render_template
app = Flask(__name__)

@app.route("/")

def home():

    personagens = [
        {
            'nome': 'Chris Redfield',
            'ataque': 20
        },
        {
            'nome': 'Claire Redfield',
            'ataque': 30
        },
        {
            'nome': 'Jill Valentine',
            'ataque': 30
        },
        {
            'nome': 'Leon S. Kennedy',
            'ataque': '20'
        }
    ]

    inimigos = [
        {
            'nome': 'Cerberus',
            'total_vida': 15
        },
        {
            'nome': 'Licker β',
            'total_vida': 20
        },
        {
            'nome': 'Zumbi',
            'total_vida': 20
        },
        {
            'nome': 'Nemesis T-Type',
            'total_vida': 30
        }
    ]

    caminho_base_imagem = '/static/img/'
    
    return render_template(
        "index.html",
        personagens=personagens,
        inimigos=inimigos,
        caminho_base_imagem=caminho_base_imagem
    )

if __name__=="__main__":
    app.run(debug=True)