
var app = new Vue({
    el: '#vue_app',
    data: {
        contact: {
            fullName: '',
            email: '',
            phone: ''
        }
    },
    methods: {
        sendMail: function () {
            if (this.isReadyToSearch(this.contact.fullName) || this.isReadyToSearch(this.contact.email) || this.isReadyToSearch(this.contact.phone)) {
                Email.send();
                debugger

                //get client's ip 
                //var ipaddress = '';
                //$.getJSON('https://ipapi.co/json/', function (data) {
                //    ipaddress = data.ip;
                //    body ye info olarak eklenebilir
                //});

                //credentials'larý eklediðiniz için güvensiz olur buna eriþenler sizin alanýnýz üzerinden gönderebilir.
                Email.send({
                    Host: 'in-v3.mailjet.com',
                    Username: '4400006c4cd2d1ee94d4ca0175b4bd11',
                    Password: '9153218137543a19b7a24a0ac6a106e6',
                    To: 'TARGET-MAIL@example.com',
                    From: this.contact.email,
                    Subject: 'Contact Form',
                    Body: document.body //burada index'in degil de contact'in bodysi olacak icinde sizin recipient(gonderenKisiBilgi)'leriniz ile
                }).then(
                    message => alert(message)
                );
            }
            else {
                alert('Alanlari bos birakmayiniz.')
            }
        },
        isReadyToSearch: function (term) {
            if (term != '' || term != undefined || term != null) {
                return true;
            }
            return false;
        }
    }
})