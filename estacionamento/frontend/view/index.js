const getCadastroHtml = () => {
    const main = document.getElementById('root');
    const dadosHtml = `
    <form class="cadastro" id="formulario">
            <h1 class="cadastro__titulo">Novo Cliente</h1>
            <label for="">Nome do Cliente</label>
            <input id="owner" placeholder="Digite o seu nome" type="text">
            <label for="">Modelo</label>
            <input id="model" placeholder="Digite o modelo do veículo" type="text">
            <br/><br/>
            <label for="">Tipo</label>
            <select id="type" type="text" placeholder="Selecione o tipo">
                <option value="1">Carro</option>
                <option value="0">Moto</option>
            </select>
            <br/><br/>
            <label for="">Placa</label>
            <input id="label" placeholder="Digite a placa do veículo" type="text">
            <br/><br/>
            <label for="">Observações</label>
            <input id="observation" placeholder="Digite a observação" type="text">
            <br/><br/>
            <div class="cadastro__item">
                <button class="button" id="cancel" type="button">Cancelar</button>
                <button class="button" id="save" type="submit">Salvar</button>
            </div>
        </form> `
        main.innerHTML = dadosHtml
}

const getListaClientesHtml = () => {
    const main = document.getElementById('root');
    const dadosHtml = `
    <section class="lista-cliente">
        <h1 class="lista-cliente__title">Lista de clientes</h1>
        <table class="lista-cliente__table" id="tbody">
            <tr>
                <th class="none">Cliente</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th class="none">Tipo</th>
                <th class="none">Observações</th>
                <th><a>Novo</a></th>
            </tr>
        </table>
    </section> `
        main.innerHTML = dadosHtml    
}

const getAtualizaHtml = () => {
    const main = document.getElementById('root');
    const dadosHtml = `
    <form class="cadastro" id="formulario">
            <h1 class="cadastro__titulo">Editar Cliente</h1>
            <label for="">Nome do Cliente</label>
            <input id="owner" placeholder="Digite o seu nome" type="text">
            <br/><br/>
            <label for="">Modelo</label>
            <input id="model" placeholder="Digite o modelo do veículo" type="text">
            <br/><br/>
            <label for="">Tipo</label>
            <select id="type" type="text" placeholder="Selecione o tipo">
                <option value="1">Carro</option>
                <option value="0">Moto</option>
            </select>
            <br/><br/>
            <label for="">Placa</label>
            <input id="label" placeholder="Digite a placa do veículo" type="text">
            <br/><br/>
            <label for="">Observações</label>
            <input id="observation" placeholder="Digite a observação" type="text">
            <br/><br/>
            <div class="cadastro__item">
                <button class="button" id="cancel" type="button">Cancelar</button>
                <button class="button" id="save" type="submit">Atualizar</button>
            </div>
        </form> `
        main.innerHTML = dadosHtml
}

const getCheckInHtml = () => {
    const main = document.getElementById('root');
    const dadosHtml = `
    <section class="checkin">
                <h2 class="checkin__title">Lista de clientes no estacionamento</h2>
                <br/>
                <table id="tbody" class="checkin__table">
                    <tr>
                        <th>Modelo</th>
                        <th>Placa</th>
                        <th>Opção</th>
                    </tr>
                </table>
                <div class="checkin__item">
                    <label>Placa</label>
                    <select class="checkin__input" id="select"></select>
                    <a type="button" id="adicionar-novo" class="checkin__item__link">Adicionar Novo</a>
                    <br/>
                    <div class="checkin__button">
                        <button id="checkin" class="button">CheckIn</button>
                    </div>
                </div>
            </section>
    `
        main.innerHTML = dadosHtml    
}

const getCheckOutHtml = () => {
    const main = document.getElementById('root');
    const dadosHtml = `
        <section class="checkout">
        <h2 class="checkout__title">Dados do cliente</h2>
        <table class="checkout__table">
        <tr>
            <th>Cliente</th>
            <th>Modelo</th>
            <th>Placa</th>
        </tr>
        <tr id= "tbody"></tr>
        </table>
        <div class="checkout__item">
        <label>Total de horas</label>
        <input 
            id="totalHora"
            class="input"
            type="text"
            placeholder="Total de horas"
            disabled
        />
        </div class="checkout__item">
        <br/>
        <div>
        <label>Valor a pagar</label>
        <input
            id="valorPagar"
            class="input"
            type="text"
            placeholder="valor a pagar"
            disabled
        />
        </div>
        <br/>
        <div class="checkout__button">
        <button class="button" id = "finalizar">Finalizar</button>
        </div>
        </section>       
    `
    main.innerHTML = dadosHtml
}

const getFaturamentoHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
        <section class="faturamento">
        <h1 class="faturamento__title">Lista de faturamento</h1>
        <table class="faturamento__table">
            <thead>
                <tr>
                    <th>Qtd veiculos</th>
                    <th>Total</th>
                    <th>Dia</th>
                </tr>
            </thead>
            <tbody id = "tbody"></tbody>
        </table>
        <div class = "grafico">
            <div class="faturamento__grafico" id = "piechart_3d"></div>
        </div>
        </section>
    `
    main.innerHTML = dadosHtml
}

export const view = {
    getListaClientesHtml,
    getCadastroHtml,
    getAtualizaHtml,
    getCheckInHtml,
    getCheckOutHtml,
    getFaturamentoHtml,
}