package io.nology.employeecreator.employee;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {

  @Autowired
  private EmployeeRepository employeeRepository;

  @Autowired
  public EmployeeService(EmployeeRepository employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  @Autowired
  private ModelMapper modelMapper;

  // Create
  public Employee create(CreateEmployeeDTO data) {
    Employee newEmployee = modelMapper.map(data, Employee.class);
    Employee createdEmployee = this.employeeRepository.save(newEmployee);
    return createdEmployee;
  }

  // Find all
  public List<Employee> findAll() {
    return this.employeeRepository.findAll();
  }

  // Find by Id
  public Optional<Employee> findById(Long id) {
    Optional<Employee> maybeEmployee = this.employeeRepository.findById(id);
    return maybeEmployee;
  }

  // Delete by Id
  public boolean deleteById(Long id) {
    Optional<Employee> maybeEmployee = this.findById(id);
    if (maybeEmployee.isEmpty()) {
      return false;
    }
    this.employeeRepository.delete(maybeEmployee.get());
    return true;
  }

  // Update by Id
  public Optional<Employee> updateById(Long id, UpdateEmployeeDTO data) {
    Optional<Employee> maybeEmployee = this.findById(id);
    if (maybeEmployee.isPresent()) {
      Employee existingEmployee = maybeEmployee.get();
      modelMapper.map(data, existingEmployee);
      return Optional.of(this.employeeRepository.save(existingEmployee));
    }
    return maybeEmployee;
  }
}
