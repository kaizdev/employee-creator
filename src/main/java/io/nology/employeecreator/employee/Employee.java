package io.nology.employeecreator.employee;

import io.nology.employeecreator.employee.EmployeeEnum.EmploymentHours;
import io.nology.employeecreator.employee.EmployeeEnum.EmploymentType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String firstName;

  @Column
  private String lastName;

  @Column
  private String email;

  @Column
  private String mobile;

  @Column
  private String address;

  @Column
  @Enumerated(EnumType.STRING)
  private EmploymentType employmentType;

  @Column
  @Enumerated(EnumType.STRING)
  private EmploymentHours employmentHours;

  @Column
  private Integer partTimeHours;

  @Column
  @Temporal(TemporalType.DATE)
  private Date startDate;

  @Column
  @Temporal(TemporalType.DATE)
  private Date finishDate;
}
