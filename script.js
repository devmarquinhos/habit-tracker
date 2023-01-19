const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
  takePills: ["01-04", "01-05", "01-06", "01-10"],
  water: ["01-02", "01-05", "01-06", "01-07"],
}

nlwSetup.setData(data)
nlwSetup.load()
