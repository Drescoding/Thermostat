describe ('Thermostat', function () {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it ('the termostat starts at 20 degrees', function () {
    expect(thermostat.temperature).toEqual(20);
  });

  it ('has an increase function', function() {
    thermostat.up(2)
    expect(thermostat.temperature).toEqual(22);
  });

  it ('has a decrease function', function () {
    thermostat.down(4)
    expect(thermostat.temperature).toEqual(16);
  });

  it ('has a minimum temperature of 10 degrees', function() {
    thermostat.down(11)
    expect(thermostat.temperature).toEqual(10);
  });

  it ('it has a powersaving mode on by default', function(){
    expect(thermostat.mode).toEqual('on');
  });

  it('If power saving mode is on, the maximum temperature is 25 degrees', function (){
    thermostat.up(10)
    expect(thermostat.temperature).toEqual(25);
  });


});
