<template>
  <div class="content" style="margin: 0 16px;">
    <div class="card text-left m-dp">
      <ul class="nav border-bottom" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active me-2"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
            >Card</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link me-2"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
            >Direct Bank</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link me-2"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
            >Other Banks</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link me-2"
            id="disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#disabled-tab-pane"
            role="tab"
            aria-controls="disabled-tab-pane"
            aria-selected="false"
            >Bank Transfer</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link me-2"
            id="disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#disabled-tab-pane"
            role="tab"
            aria-controls="disabled-tab-pane"
            aria-selected="false"
            >Quickteller</a
          >
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane show active pt-3"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div class="d-flex card-list">
            <img src="/img/deposit/card-visa.png" alt="" srcset="" />
            <img src="/img/deposit/card-master.png" alt="" srcset="" />
            <img src="/img/deposit/card-verve.png" alt="" srcset="" />
          </div>

          <div class="card-form mt-4 pb-3 border-bottom">
            <div class="mb-3 row">
              <label for="inputPassword" class="col-3 text-end col-form-label"
                >Card Info</label
              >
              <div class="col-9 d-flex">
                <div class="form-floating mb-3 w-50 me-3">
                  <input
                    type="email"
                    class="form-control rounded-0"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Card number</label>
                </div>
                <div class="form-floating mb-3 w-25 me-3">
                  <input
                    type="email"
                    class="form-control rounded-0"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Expiry</label>
                </div>
                <div class="form-floating mb-3 w-25">
                  <input
                    type="email"
                    class="form-control rounded-0"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">CVV</label>
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-3 text-end col-form-label"
                >Amount (NGN)</label
              >
              <div class="col-9 d-flex">
                <div class="mb-3 w-25 me-3">
                  <input
                    type="email"
                    class="form-control form-control-lg rounded-0"
                    id="floatingInput"
                    placeholder="min. 100"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label
                for="inputPassword"
                class="col-3 text-end col-form-label"
              ></label>
              <div class="col-9 d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Save Card
                  </label>
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label
                for="inputPassword"
                class="col-3 text-end col-form-label"
              ></label>
              <div class="col-9 d-flex">
                <button class="btn px-5 rounded-0 btn-success btn-lg">
                  Top Up Now
                </button>
              </div>
            </div>
          </div>
          <div class="payment-tips-wrap pt-3">
            <div class="wrap" style="position: relative">
              <div class="title h5">Note</div>
              <ul class="m-dp-tips f-count">
                <li class="l-item">
                  1. Minimum deposit amount is NGN 100.00 - you can deposit at
                  least NGN 100.00 in one transaction.
                </li>
                <li class="l-item">
                  2. Maximum per transaction is NGN 9,999,999.00 - you can
                  deposit up to NGN 9,999,999.00 in one transaction.
                </li>
                <li class="l-item">
                  3. Any card details you choose to save are encrypted. We do
                  not store your CVV. We will also ask you to input your Sporty
                  PIN any time you want to use your card after it has been
                  successfully used for the first time and saved.
                </li>
                <li class="l-item">
                  4. We do not share your payment information. It is used for
                  transaction verification only.
                </li>
                <li class="l-item">
                  5. If you have any issues, please contact customer service.
                  Using too many cards or bank accounts for deposits may cause
                  the deposit to be blocked and your account restricted.
                </li>
                <li class="l-item">
                  6. Deposit is free, there are no transaction fees.
                </li>
              </ul>
              <!---->
            </div>
          </div>
        </div>
        <div
          class="tab-pane"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div class="content pt-5 py-3 border-bottom">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div
                v-for="(method, index) in deposit_methods"
                :key="index"
                class="accordion-item"
              >
                <h2
                  class="accordion-header"
                  :id="'flush-heading' + method.index"
                >
                  <button
                    class="accordion-button collapsed py-4"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#flush-collapse' + method.index"
                    aria-expanded="false"
                    :aria-controls="'flush-collapse' + method.index"
                  >
                    <img
                      class="me-3"
                      :src="'/img/deposit/bank/' + method.icon_name + '.png'"
                      style="height: 20px"
                      alt=""
                      srcset=""
                    />
                    {{ method.name }}
                  </button>
                </h2>
                <div
                  :id="'flush-collapse' + method.index"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div
                      v-for="(type, index) in method.methods"
                      :key="index"
                      class="accordion accordion-flush"
                      id="accordionFlushExample2"
                    >
                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          :id="'flush-heading' + index"
                        >
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            :data-bs-target="'#flush-collapse' + index"
                            aria-expanded="false"
                          >
                            Deposit with {{ type.name }}
                          </button>
                        </h2>
                        <div
                          :id="'flush-collapse' + index"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample2"
                        >
                          <div class="accordion-body">
                            <ul style="list-style-type: decimal">
                              <li v-for="(a, index) in type.steps" :key="index">
                                {{ a }}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="payment-tips-wrap pt-3">
            <div class="wrap" style="position: relative">
              <div class="title h5">Note</div>
              <ul class="m-dp-tips f-count">
                <li class="l-item">
                  1. Deposit is free, there are no transaction fees.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="tab-pane"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          <div class="card-form mt-4 pb-3 border-bottom">
            <div class="mb-3 row">
              <label for="inputPassword" class="col-2 text-end col-form-label"
                >Bank Account</label
              >
              <div class="col-10 d-flex">
                <div class="form-floating mb-3 w-25 me-3">
                  <input
                    type="email"
                    class="form-control rounded-0"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Choose Bank</label>
                </div>
                <div class="form-floating mb-3 w-25 me-3">
                  <input
                    type="email"
                    class="form-control rounded-0"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Acct. No</label>
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-2 text-end col-form-label"
                >Amount</label
              >
              <div class="col-10 d-flex">
                <div class="mb-3 w-25 me-3">
                  <input
                    type="email"
                    class="form-control form-control-lg rounded-0"
                    id="floatingInput"
                    placeholder="min. 100"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label
                for="inputPassword"
                class="col-2 text-end col-form-label"
              ></label>
              <div class="col-10 d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Save Card
                  </label>
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label
                for="inputPassword"
                class="col-2 text-end col-form-label"
              ></label>
              <div class="col-10 d-flex">
                <button class="btn px-5 rounded-0 btn-success btn-lg">
                  Top Up Now
                </button>
              </div>
            </div>
          </div>
          <div class="payment-tips-wrap pt-3">
            <div class="wrap" style="position: relative">
              <div class="title h5">Note</div>
              <ul data-v-252fb710="" class="m-dp-tips f-count">
                <li data-v-252fb710="" class="l-item">
                  1.Minimum deposit amount is NGN 100.00 - you can deposit at
                  least NGN 100.00 in one transaction.
                </li>
                <li data-v-252fb710="" class="l-item">
                  2.Maximum per transaction is NGN 9,999,999.00 - you can
                  deposit up to NGN 9,999,999.00 in one transaction.
                </li>
                <li data-v-252fb710="" class="l-item">
                  3.We do not share your payment information. It is used for
                  transaction verification only.
                </li>
                <li data-v-252fb710="" class="l-item">
                  4.If you have any recharge issues, please contact customer
                  service. Trying to user multiple cards/bank accounts for
                  multiple deposits may cause error.
                </li>
                <li data-v-252fb710="" class="l-item">
                  5.Deposit is free, there are no transaction fees.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="tab-pane"
          id="disabled-tab-pane"
          role="tabpanel"
          aria-labelledby="disabled-tab"
          tabindex="0"
        >
          ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deposit",
  layout: "account",
  data() {
    return {
      deposit_methods: [
        {
          name: "United Bank for Africa",
          icon_name: "uba",
          methods: [
            {
              name: "USSD",
              steps: [
                "Dials *919*26*3#",
                "Inputs UBA Magic Banking PIN",
                "Inputs SportyBet Registered Phone No",
                "Inputs Amount",
                "Confirms amount to be paid",
                "An SMS is sent for Confirmation",
              ],
            },
            {
              name: "Leo Messenger",
              steps: [
                "Go to https://m.me/ubachatbanking",
                "Type Pay Bills",
                "Select Betting/Lottery",
                "Select SportyBet",
                "Enter Amount",
                "Confirm Payment",
                "A message is sent for confirmation",
              ],
            },
            {
              name: "UBA Branches",
              steps: [
                "You can visit all UBA branches to fund your SportyBet wallet",
              ],
            },
          ],
        },
        {
          name: "Gurantee Trust Bank",
          icon_name: "gtbank",
        },
      ],
    };
  },
};
</script>

<style>
.m-dp {
  padding: 0 65px 59px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #353a45;
  background: #fff;
  min-height: 100px;
}

.m-dp .nav-item a.nav-link {
  display: inline-block;
  padding: 20px 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 20px;
  cursor: pointer;
  white-space: nowrap;
  color: #353a45;
  text-decoration: none;
}

.m-dp .col-form-label {
  font-size: 16px;
  font-weight: 500;
  color: #353a45;
}

.m-dp .nav-item a.nav-link.active {
  font-weight: bold;
  border-bottom: 3px solid #0d9737;
}

.m-dp .nav-item a.nav-link:not(.active):hover {
  border-bottom: 3px solid rgba(13, 151, 55, 0.5);
}

.card-list img {
  margin-right: 8px;
  height: 24px;
}

.l-item {
  align-items: flex-start;
  color: #9ca0ab;
  padding-bottom: 0.66666667rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.accordion-button {
  font-size: 14px;
}

.accordion-button:not(.collapsed) {
  color: #353a45;
  background-color: #fcfcfc;
  box-shadow: none;
}
</style>
