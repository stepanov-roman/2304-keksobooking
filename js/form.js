'use strict';

(function () {
  var noticeForm = document.querySelector('.notice__form');
  var noticeTitle = noticeForm.querySelector('#title');
  var noticePrice = noticeForm.querySelector('#price');
  var noticeAddress = noticeForm.querySelector('#address');
  var noticeTime = noticeForm.querySelector('#time');
  var noticeTimeout = noticeForm.querySelector('#timeout');
  var noticeType = noticeForm.querySelector('#type');
  var noticeRooms = noticeForm.querySelector('#room_number');
  var noticeCapacity = noticeForm.querySelector('#capacity');

  var setLimitsForm = function () {
    noticeTitle.required = true;
    noticeTitle.minLength = 30;
    noticeTitle.maxLength = 100;

    noticePrice.required = true;
    noticePrice.type = 'number';
    noticePrice.min = 1000;
    noticePrice.max = 1000000;

    noticeAddress.required = true;
  };

  var onFieldsSynchronize = function (sourceInput, targetInput, sourceValues, targetValues, targetProperty) {
    targetInput[targetProperty] = targetValues[sourceValues.indexOf(sourceInput.value)];
  };

  var changeTimeHandler = function () {
    window.synchronizeFields(
        noticeTime,
        noticeTimeout,
        ['12', '13', '14'],
        ['12', '13', '14'],
        'value',
        onFieldsSynchronize
      );
  };

  var changeTimeoutHandler = function () {
    window.synchronizeFields(
        noticeTimeout,
        noticeTime,
        ['12', '13', '14'],
        ['12', '13', '14'],
        'value',
        onFieldsSynchronize
      );
  };

  var changeTypeHandler = function () {
    window.synchronizeFields(
        noticeType,
        noticePrice,
        ['flat', 'bungalo', 'house'],
        ['1000', '0', '10000'],
        'min',
        onFieldsSynchronize
      );
    window.synchronizeFields(
        noticeType,
        noticePrice,
        ['flat', 'bungalo', 'house'],
        ['1000', '0', '10000'],
        'value',
        onFieldsSynchronize
      );
  };

  var changeRoomHandler = function () {
    window.synchronizeFields(
        noticeRooms,
        noticeCapacity,
        ['1', '2', '100'],
        ['0', '3', '3'],
        'value',
        onFieldsSynchronize
      );
  };

  setLimitsForm();
  noticeTime.addEventListener('change', changeTimeHandler);
  noticeTimeout.addEventListener('change', changeTimeoutHandler);
  noticeType.addEventListener('change', changeTypeHandler);
  noticeRooms.addEventListener('change', changeRoomHandler);

  changeTypeHandler();
  changeRoomHandler();
})();
