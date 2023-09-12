package io.nology.employeecreator.employee;

import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatchers;
import org.mockito.BDDMockito;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {

  @Mock
  private EmployeeRepository employeeRepository;

  private EmployeeService underTest;

  @BeforeEach
  void setUp() {
    this.underTest = new EmployeeService(employeeRepository);
  }

  @Test
  void findAllEmployeesShouldCallFindAll() {
    underTest.findAll();
    Mockito.verify(employeeRepository).findAll();
  }

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
}
