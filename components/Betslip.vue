<template>
    <div class="card rounded-0 shadow-none" style="background: #353A45;">
      <div class="card-body p-2">
        <nav>
        <div class="betslip_container nav nav-tabs nav-fill text-center" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Betslip</button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Cashout</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-betslip" role="tabpanel" aria-labelledby="nav-home-tab">
          <div class="toggle mt-3 mb-2">
            <span class="active">REAL</span>
            <span>SIM</span>
          </div>
          <div class="card rounded-0">
            <div class="card-body">
              <div class="bet_item py-3 border-bottom">
                <div class="d-flex flex-row">
                  <div class="form-check me-2">
                    <label class="form-check-label">
                      <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader">
                    </label>
                  </div>
                  <div class="w-100">
                    <div class="d-flex justify-content-between">
                      <span><span class="pe-2" id="sport_icon">⚽️</span>Home</span>
                      <i class="fa fa-times"></i>
                    </div>
                    <p class="small mb-0">Argentina v Croatia</p>
                    <div class="d-flex justify-content-between">
                      <p>1X2</p>
                      <h1 class="h5">1.90</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bet_item py-3 border-bottom">
                <div class="d-flex flex-row">
                  <div class="form-check me-2">
                    <label class="form-check-label">
                      <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader">
                    </label>
                  </div>
                  <div class="w-100">
                    <div class="d-flex justify-content-between">
                      <span><span class="pe-2" id="sport_icon">⚽️</span>Home</span>
                      <i class="fa fa-times"></i>
                    </div>
                    <p class="small mb-0">Argentina v Croatia</p>
                    <div class="d-flex justify-content-between">
                      <p class="mb-0">1X2</p>
                      <h1 class="h5">1.90</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="divider my-3"></div>
              <div class="border-bottom">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th style="width: 33.3%" class="text-start">Type</th>
                      <th style="width: 33.3%" class="text-center">No.</th>
                      <th style="width: 33.3%" class="text-end">Stake(NGN)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>Muliple</td>
                    <td class="text-center">1</td>
                    <td ><input type="text" style="width:70px"></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="py-3">
                <div class="d-flex justify-content-between">
                  <span>Odds</span>
                  <span>7.53</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Total Stake</span>
                  <span>7.53</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Max. Bonus</span>
                  <span>7.53</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Potential Win</span>
                  <span>7.53</span>
                </div>
              </div>
              <button class="btn btn-lg rounded-0 btn-success btn-block w-100">Place Bet</button>
              <div class="d-flex justify-content-between">
                  <span>Book Bet</span>
                  <span>Print</span>
                </div>
            </div>
          </div>

        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div class="card-body bg-white mx-3 mt-5 mb-3">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#nav-tab{
  border: 0;
}
.betslip_container .nav-link{
  text-decoration: none;
  color: white;
  font-size: 16px;
  line-height: 22px;
  padding: 8px 10px 6px;
  border: 0;
}

.betslip_container .nav-link.active{
  background-color: transparent;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 0;
  border-bottom: 3px solid green;
  color: white;
}

#nav-tab .nav-link:not(.nav-link.active):hover{
    border: 0 !important;
}

.toggle{
  border: 1px solid rgb(114, 114, 114);
  /* padding: 6px 0px; */
  border-radius: 25px;
  width: 100px;
  display: flex;
  justify-content: space-between;
}

.toggle span{
  /* height: 20px; */
  border-radius: 10px;
  /* line-height: 20px; */
  padding: 3px 6px;
  color: white;
  letter-spacing: 1.25px;
  font-family: Roboto-Bold;
}

.toggle span.active{
  background-color: green;
}
</style>
