package io.nology.employeecreator.employee;

import io.nology.employeecreator.employee.EmployeeEnum.EmploymentHours;
import io.nology.employeecreator.employee.EmployeeEnum.EmploymentType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateEmployeeDTO {

  @NotBlank
  String firstName;

  @NotBlank
  String lastName;

  @NotBlank
  String email;

  @NotBlank
  @Pattern(regexp = "^04\\d{8}$")
  String mobile;

  @NotBlank
  String address;

  @NotNull
  EmploymentType employmentType;

  @NotNull
  EmploymentHours employmentHours;

  @Nullable
  Integer partTimeHours;

  @NotNull
  Date startDate;

  @Nullable
  Date finishDate;
}
