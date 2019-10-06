const { spawn }       = require('child_process')

const NodeSDRModule   = require('../../core/NodeSDRModule')
const NodeSDR_RTL_SDR = require('../../core/NodeSDR_RTL_SDR')

class NodeSDRCoreSDRController extends NodeSDRModule {

  constructor() { 
    super() 
  }

  static devices() {
    // return JSON object of all radio devices
  }

  /*
    - Currently only handles RTL SDR

    - If another type of SDR is used and drivers are available, 
      add a new case below and the appropriate core > NODESDR_Type_of_SDR.js
  */
  static create(settings) {
    // create a new radio
    try {

      switch(settings.type) {

        case 'rtl-sdr':
          
            const RTL_SDR_Radio = new NodeSDR_RTL_SDR(settings)
            
            RTL_SDR_Radio.rtl_fm();

            return RTL_SDR_Radio.status()

        default: 
          throw new Error('The SDR type provided is not recognised. Or one was not provoded.')
      }

    } catch(error) {
      return error.message
    }
  }

  static status(id) {
    // get status of specific radio
  }

  static setStatus(id, status = null) {
    // activate / deactivate
  }
}

module.exports = NodeSDRCoreSDRController