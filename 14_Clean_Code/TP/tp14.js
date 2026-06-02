async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrderFromApi(orderId, token);
        renderOrderModal(order, token);
    } catch (error) {
        console.error('Gagal memuat detail pesanan:', error);
    }
}

async function getOrderFromApi(orderId, token) {
    const response = await fetch(`https://example.com/api/order/${orderId}`, {
        headers: { 'Authorization': token }
    });

    if (!response.ok) {
        throw new Error('Gagal mengambil detail pesanan');
    }
    return response.json();
}

function renderOrderModal(order, token) {
    const modal = document.getElementById('orderModal');
    const detailsDiv = modal.querySelector('#orderDetails');

    populateOrderDetails(detailsDiv, order);
    setupCloseButton(modal);
    setupConfirmButton(modal, order, token);

    modal.style.display = 'block';
}

function populateOrderDetails(detailsDiv, order) {
    detailsDiv.innerHTML = '';

    const header = document.createElement('h3');
    header.textContent = `Order ID: ${order.id}`;
    detailsDiv.appendChild(header);

    const statusParagraph = document.createElement('p');
    statusParagraph.textContent = `Status: ${order.status}`;
    detailsDiv.appendChild(statusParagraph);
}

function setupCloseButton(modal) {
    const closeBtn = modal.querySelector('.close');

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
}

function setupConfirmButton(modal, order, token) {
    const confirmBtn = modal.querySelector('#confirmOrderBtn');

    if (order.status === 'Delivered') {
        confirmBtn.style.display = 'none';
        confirmBtn.onclick = null;
    } else {
        confirmBtn.style.display = 'block';
        confirmBtn.onclick = () => {
            confirmOrder(order.id, token);
        };
    }
}