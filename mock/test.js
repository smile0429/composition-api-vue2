module.exports = [
  {
    url: '/charts/test',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        xdata: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        ydata: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    }
  }
]