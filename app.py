from flask import Flask,render_template
app = Flask(__name__)

@app.route("/")

def home():

    p_principais = [
        {
            'nome': 'Chris Redfield',
            'img': 'chris1'
        },
        {
            'nome': 'Claire Redfield',
            'img': 'claire1'
        },
        {
            'nome': 'Jill Valentine',
            'img': 'jill1'
        },
        {
            'nome': 'Leon S. Kennedy',
            'img': 'leon'
        }
    ]

    inimigos = [
        {
            'nome': 'Cerberus',
            'img': 'cerberus1'
        },
        {
            'nome': 'Licker',
            'img': 'licker1'
        },
        {
            'nome': 'Zumbi',
            'img': 'zumbi1'
        },
        {
            'nome': 'Nemesis T-Type',
            'img': 'nemesis1'
        }
    ]

    caminho_imagem = '/static/img/'
    
    return render_template(
        'index.html',
        p_principais = p_principais,
        inimigos = inimigos,
        caminho_imagem = caminho_imagem
    )

if __name__=="__main__":
    app.run(debug=True)