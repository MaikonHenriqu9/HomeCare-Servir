emailjs.init("MaX7dJ7LMuI5noaTD");

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    const serviceId = "service_m5wes85"; // colocar o id do Douglas (service_rt4yq5f) <- colocar depois que aceitar o código
    const templateId = "template_d82yqzi"; // colocar o template do Douglas (criar no site)

    const botaoEnviar = document.getElementById("botaoEnviar");
    botaoEnviar.textContent = "Enviando ...";
    botaoEnviar.disabled = true;

    emailjs.send(serviceId, templateId, formData).then(() => {
        Toastify({
          text: "E-mail enviado com sucesso",
          duration: 4000,
          style: {
            background: "#28a745",
            color: "f4f4f4"
          }
        }).showToast();

        document.getElementById("formulario").reset();

      })
      .catch((error) => {
            Toastify({
            text: "Erro ao enviar o e-mail",
            duration: 4000,
            style: {
                background: "#a72828ff",
                color: "f4f4f4"
            }
            }).showToast();

            console.log("Mensagem de erro: ", error)
      })
      .finally(() => {
        botaoEnviar.textContent = "Enviar";
        botaoEnviar.disabled = false;
    });

  });
