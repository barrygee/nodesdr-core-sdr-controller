const express                        = require('express')
const router                         = express.Router()

const NodeSDRCoreSDRControllerModule = require('./module')

router.get('/', (req, res) => {

  const endpoints = {
    "devices": "/devices",
    "create": "/create/:settings",
    "status": "/:id/status",
    "activate": "/:id/activate/:settings",
    "deactivate": "/:id/deactivate/",
  }

  res.send(endpoints)
})

router.get('/devices', (req, res) => {

  // return a list of NodeSDR_RTL_SDR() devices
  // {
  //   id: '1',
  //   name: 'some name',
  //   type: 'rtl-sdr',
  //   status: {
  //     locked: true,
  //     frequency: '123456',
  //     band: 'am'
  //   }
  // }
  console.log('a list of devices')
  res.send('list of devices')
})

/*
  create new NodeSDR_RTL_SDR() device
  return data stream from the device

  Example URL: http://localhost:6633/sdr/create?name=myRTLSDR&device_index=0&frequency=1243750&mode=AM&squelch_level=1&type=rtl-sdr
*/
router.get('/create/:settings?', (req, res) => res.send(NodeSDRCoreSDRControllerModule.create(req.query)))


/* 
  GET / SET a radio status

  in-use, disabled, ready
*/
router.get('/:id/status', (req, res) => {

  // get the status of a specific NodeSDR_RTL_SDR() device

  // return confirmation of status
})

router.post('/:id/:settings?', (req, res) => {

  // status is set as part of the req.params 'settings' object

  /*
    if settings provided use these
    else use last settings provided for selected radio
  */

  // return confirmation of status
})


router.get('/:id/rtl-fm/:settings', async (req, res) => {
    RTL_SDR_Radio = await // get the radio created above.
  
    // return data stream from the device
    RTL_SDR_Radio.rtl_fm({mode: req.params.mode, frequency: req.params.frequency})
})


/*
  connect to a remote NodeSDR 

  need a wy to store host, post, deviceID: key
*/
router.get('/connect/:config', (req, res) => res.send(NodeSDRCoreSDRControllerModule.connect(req.query)))

module.exports = router