import React, { Component } from "react";
export default class Home extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Basic Table</h4>{" "}
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12" />
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="white-box">
                <div className="col-in row">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    {" "}
                    <i data-icon="E" className="linea-icon linea-basic" />
                    <h5 className="text-muted vb">MYNEW CLIENTS</h5>{" "}
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <h3 className="counter text-right m-t-15 text-danger">
                      50
                    </h3>{" "}
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        {" "}
                        <span className="sr-only">
                          40% Complete (success)
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="white-box">
                <div className="col-in row">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    {" "}
                    <i className="linea-icon linea-basic" data-icon="" />
                    <h5 className="text-muted vb">NEW PROJECTS</h5>{" "}
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <h3 className="counter text-right m-t-15 text-megna">
                      169
                    </h3>{" "}
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-megna"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        {" "}
                        <span className="sr-only">
                          40% Complete (success)
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="white-box">
                <div className="col-in row">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    {" "}
                    <i className="linea-icon linea-basic" data-icon="" />
                    <h5 className="text-muted vb">NEW INVOICES</h5>{" "}
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <h3 className="counter text-right m-t-15 text-primary">
                      157
                    </h3>{" "}
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        {" "}
                        <span className="sr-only">
                          40% Complete (success)
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<div className="row">
        <div className="col-md-12">
          <div className="white-box">
            <h3 className="box-title">Sales Difference</h3>
            
            <div id="morris-area-chart2" style={{height: '370px', position: 'relative', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}><svg height={370} version="1.1" width={1343} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{overflow: 'hidden', position: 'relative'}}><desc style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>Created with Raphaël 2.1.2</desc><defs style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="32.859375" y={331} textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>0</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.359375,331H1318" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="32.859375" y="254.5" textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>75</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.359375,254.5H1318" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="32.859375" y={178} textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>150</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.359375,178H1318" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="32.859375" y="101.5" textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>225</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.359375,101.5H1318" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="32.859375" y={25} textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>300</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.359375,25H1318" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x={1318} y="343.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2016</tspan></text><text x="1105.9900373687815" y="343.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2015</tspan></text><text x="893.9800747375627" y="343.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2014</tspan></text><text x="681.9701121063441" y="343.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2013</tspan></text><text x="469.37930026243725" y="343.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2012</tspan></text><text x="257.3693376312186" y="343.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2011</tspan></text><text x="45.359375" y="343.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2010</tspan></text><path fill="#f4f4f4" stroke="none" d="M45.359375,331L257.3693376312186,198.4L469.37930026243725,249.4L681.9701121063441,259.6L893.9800747375627,147.4L1105.9900373687815,223.89999999999998L1318,76L1318,331L45.359375,331Z" fillOpacity="0.7" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: '0.7'}} /><path fill="none" stroke="#cccccc" d="M45.359375,331L257.3693376312186,198.4L469.37930026243725,249.4L681.9701121063441,259.6L893.9800747375627,147.4L1105.9900373687815,223.89999999999998L1318,76" strokeWidth={0} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="45.359375" cy={331} r={0} fill="#cccccc" stroke="#cccccc" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="257.3693376312186" cy="198.4" r={0} fill="#cccccc" stroke="#cccccc" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="469.37930026243725" cy="249.4" r={0} fill="#cccccc" stroke="#cccccc" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="681.9701121063441" cy="259.6" r={0} fill="#cccccc" stroke="#cccccc" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="893.9800747375627" cy="147.4" r={0} fill="#cccccc" stroke="#cccccc" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="1105.9900373687815" cy="223.89999999999998" r={0} fill="#cccccc" stroke="#cccccc" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx={1318} cy={76} r={0} fill="#cccccc" stroke="#cccccc" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><path fill="#e7dedc" stroke="none" d="M45.359375,331L257.3693376312186,229L469.37930026243725,269.8L681.9701121063441,127L893.9800747375627,178L1105.9900373687815,239.2L1318,178L1318,331L45.359375,331Z" fillOpacity="0.7" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: '0.7'}} /><path fill="none" stroke="#cbb2ae" d="M45.359375,331L257.3693376312186,229L469.37930026243725,269.8L681.9701121063441,127L893.9800747375627,178L1105.9900373687815,239.2L1318,178" strokeWidth={0} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="45.359375" cy={331} r={0} fill="#cbb2ae" stroke="#cbb2ae" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="257.3693376312186" cy={229} r={0} fill="#cbb2ae" stroke="#cbb2ae" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="469.37930026243725" cy="269.8" r={0} fill="#cbb2ae" stroke="#cbb2ae" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="681.9701121063441" cy={127} r={0} fill="#cbb2ae" stroke="#cbb2ae" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="893.9800747375627" cy={178} r={0} fill="#cbb2ae" stroke="#cbb2ae" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="1105.9900373687815" cy="239.2" r={0} fill="#cbb2ae" stroke="#cbb2ae" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx={1318} cy={178} r={0} fill="#cbb2ae" stroke="#cbb2ae" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /></svg><div className="morris-hover morris-default-style" style={{left: '6.85938px', top: '231px', display: 'none'}}><div className="morris-hover-row-label">2010</div><div className="morris-hover-point" style={{color: '#ccc'}}>
                  Site A:
                  0
                </div><div className="morris-hover-point" style={{color: '#cbb2ae'}}>
                  Site B:
                  0
                </div></div></div>
          </div>
        </div>
      </div>
          <footer className="footer text-center">
            2017 © Pixel Admin brought to you by wrappixel.com{" "}
          </footer>
        </div>
      </div>
    );
  }
}
