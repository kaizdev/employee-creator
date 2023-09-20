package io.nology.employeecreator.employee;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;

import java.util.Optional;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatchers;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {

  @Mock
  private EmployeeRepository employeeRepository;

  @InjectMocks
  private EmployeeService underTest;

  @Mock
  private ModelMapper modelMapper;

  @BeforeEach
  void setUp() {
    this.underTest = new EmployeeService(employeeRepository, modelMapper);
  }

  // Find all
  @Test
  void findAllEmployeesShouldCallFindAll() {
    underTest.findAll();
    Mockito.verify(employeeRepository).findAll();
  }

  // Delete
  @Test
  void itShouldDeleteEmployeeIfIdExists() {
    Long id = 123L;
    Employee employee = new Employee();
    employee.setId(id);

    BDDMockito
      .given(employeeRepository.findById(ArgumentMatchers.anyLong()))
      .willReturn(Optional.of(employee));

    underTest.deleteById(id);

    ArgumentCaptor<Employee> employArgumentCaptor = ArgumentCaptor.forClass(
      Employee.class
    );

    Mockito.verify(employeeRepository).delete(employArgumentCaptor.capture());

    Assertions.assertThat(employArgumentCaptor.getValue()).isEqualTo(employee);
  }

  @Test
  void itShouldNotDeleteEmployeeIfIdDoesNotExist() {
    Long id = 456L;

    BDDMockito
      .given(employeeRepository.findById(ArgumentMatchers.anyLong()))
      .willReturn(Optional.empty());

    boolean result = underTest.deleteById(id);

    Mockito
      .verify(employeeRepository, Mockito.never())
      .delete(ArgumentMatchers.any(Employee.class));

    Assertions.assertThat(result).isFalse();
  }

  // Create
  @Test
  void itShouldCreateNewEmployeeSuccessfully() {
    CreateEmployeeDTO createEmployeeDTO = new CreateEmployeeDTO();
    Employee employee = new Employee();

    Mockito
      .when(modelMapper.map(createEmployeeDTO, Employee.class))
      .thenReturn(employee);
    Mockito.when(employeeRepository.save(employee)).thenReturn(employee);

    Employee createdEmployee = underTest.create(createEmployeeDTO);
    Mockito.verify(employeeRepository).save(employee);
    assertEquals(employee, createdEmployee);
  }

  @Test
  void itShouldFailWhenMobileNumberIsBlank() {
    CreateEmployeeDTO createEmployeeDTO = new CreateEmployeeDTO();
    createEmployeeDTO.setMobile("");

    Mockito
      .when(modelMapper.map(eq(createEmployeeDTO), eq(Employee.class)))
      .thenThrow(new IllegalArgumentException("Invalid mobile number"));

    assertThrows(
      IllegalArgumentException.class,
      () -> {
        underTest.create(createEmployeeDTO);
      }
    );
  }

  // Update
  @Test
  void itShouldUpdateEmployeeSuccessfullyIfIdExists() {
    Long id = 456L;
    UpdateEmployeeDTO updateEmployeeDTO = new UpdateEmployeeDTO();
    Employee existingEmployee = new Employee();
    Employee updatedEmployee = new Employee();

    Mockito
      .when(employeeRepository.findById(id))
      .thenReturn(Optional.of(existingEmployee));
    Mockito
      .when(employeeRepository.save(existingEmployee))
      .thenReturn(updatedEmployee);

    Optional<Employee> result = underTest.updateById(id, updateEmployeeDTO);

    assertTrue(result.isPresent());
    assertEquals(updatedEmployee, result.get());
    Mockito.verify(modelMapper).map(updateEmployeeDTO, existingEmployee);
    Mockito.verify(employeeRepository).save(existingEmployee);
  }

  @Test
  void itShouldNotUpdateEmployeeWhenIdDoesNotExist() {
    Long largeId = 999L;
    UpdateEmployeeDTO updateEmployeeDTO = new UpdateEmployeeDTO();

    Mockito
      .when(employeeRepository.findById(largeId))
      .thenReturn(Optional.empty());

    Optional<Employee> result = underTest.updateById(
      largeId,
      updateEmployeeDTO
    );

    assertFalse(result.isPresent());
    Mockito.verify(modelMapper, times(0)).map(any(), any());
    Mockito.verify(employeeRepository, times(0)).save(any());
  }
}
