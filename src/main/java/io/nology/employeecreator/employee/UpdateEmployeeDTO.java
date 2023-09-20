package io.nology.employeecreator.employee;

import io.nology.employeecreator.employee.EmployeeEnum.EmploymentHours;
import io.nology.employeecreator.employee.EmployeeEnum.EmploymentType;
import jakarta.validation.constraints.Pattern;
import java.util.Date;
import lombok.Data;

@Data
public class UpdateEmployeeDTO {

  @Pattern(
    regexp = "^(?=\\S).*$",
    message = "First name cannot be an empty string"
  )
  String firstName;

  @Pattern(
    regexp = "^(?=\\S).*$",
    message = "Last name cannot be an empty string"
  )
  String lastName;

  @Pattern(regexp = "^(?=\\S).*$", message = "Email cannot be an empty string")
  String email;

  @Pattern(regexp = "^04\\d{8}$")
  String mobile;

  String address;

  EmploymentType employmentType;

  EmploymentHours employmentHours;

  Integer partTimeHours;

  Date startDate;

  Date finishDate;
}
