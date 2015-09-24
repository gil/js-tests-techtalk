describe('CounterView', function() {

  beforeEach(function() {
    this.sandbox = sinon.sandbox.create();
    this.clock = sinon.useFakeTimers();
    this.server = sinon.fakeServer.create();
  });

  afterEach(function() {
    this.sandbox.restore();
    this.clock.restore();
    this.server.restore();

    if( this.view ) {
      this.view.remove();
    }
  });

  it('should have a CounterModel defined for the view', function() {
    this.view = new CounterView();
    expect( this.view.model ).toBeDefined();
    expect( this.view.model instanceof CounterModel ).toBeTruthy();
  });

  it('should render counter after init', function() {
    this.view = new CounterView();
    this.server.requests[0].respond(200, { 'Content-Type' : 'application/json' },
      JSON.stringify({ counter : 3 })
    );

    var counterDiv = this.view.$('.counter').text();
    expect( counterDiv ).toEqual( '3' );
  });

  it('should handle increase button click', function() {
    this.sandbox.stub(CounterView.prototype, 'increase');
    this.view = new CounterView();
    this.server.requests[0].respond(200, { 'Content-Type' : 'application/json' },
      JSON.stringify({ counter : 3 })
    );

    this.view.$('.increase').trigger('click');
    sinon.assert.calledOnce(this.view.increase);
  });

  it('should save model with increased counter on button click', function() {
    this.view = new CounterView();
    this.sandbox.stub(this.view.model, 'save').returns({ success: sinon.stub() });
    this.server.requests[0].respond(200, { 'Content-Type' : 'application/json' },
      JSON.stringify({ counter : 3 })
    );

    this.view.$('.increase').trigger('click');
    sinon.assert.calledWith(this.view.model.save, { counter : 4 });
  });

  it('should handle decrease button click', function() {
    this.sandbox.stub(CounterView.prototype, 'decrease');
    this.view = new CounterView();
    this.server.requests[0].respond(200, { 'Content-Type' : 'application/json' },
      JSON.stringify({ counter : 3 })
    );

    this.view.$('.decrease').trigger('click');
    sinon.assert.calledOnce(this.view.decrease);
  });

  it('should save model with decreased counter on button click', function() {
    this.view = new CounterView();
    this.sandbox.stub(this.view.model, 'save').returns({ success: sinon.stub() });
    this.server.requests[0].respond(200, { 'Content-Type' : 'application/json' },
      JSON.stringify({ counter : 3 })
    );

    this.view.$('.decrease').trigger('click');
    sinon.assert.calledWith(this.view.model.save, { counter : 2 });
  });

  it('should do something async', function(done) {
    this.view = new CounterView();
    this.view.doSomethingAsync(function(something) {
      if( something ) {
        done();
      }
    });
    this.clock.tick(1000);
  });

});