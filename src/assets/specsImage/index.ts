// phone
import batteryPhone from './Phones/battery_phone.svg';
import corePhone from './Phones/core_phone.svg';
import cameraPhone from './Phones/camera_phone.svg';
import diagonalPhone from './Phones/diagonal_phone.svg';
import selfieCameraPhone from './Phones/selfieCamera_phone.svg';

// tablet
import diagonalTablet from './Tablet/diagonal_tablet.svg';
import osTablet from './Tablet/os_tablet.svg';
import processorTablet from './Tablet/processor_tablet.svg';
import screenTypeTablet from './Tablet/screenType_tablet.svg';

// laptop
import diagonalLaptop from './Laptop/diagonal_laptop.svg';
import memoryLaptop from './Laptop/memory_laptop.svg';
import osLaptop from './Laptop/os_laptop.svg';
import processorLaptop from './Laptop/processor_laptop.svg';
import ramLaptop from './Laptop/ram_laptop.svg';
import gpuLaptop from './Laptop/gpu_laptop.svg';

export const SPECS_IMAGE: { [key: string]: string } = {
  diagonalLaptop,
  memoryLaptop,
  osLaptop,
  processorLaptop,
  ramLaptop,
  gpuLaptop,
  diagonalTablet,
  memoryTablet: memoryLaptop,
  osTablet,
  processorTablet,
  ramTablet: ramLaptop,
  screenTypeTablet,
  diagonalPhone,
  batteryPhone,
  corePhone,
  cameraPhone,
  selfieCameraPhone,
  processorPhone: processorTablet,
};
