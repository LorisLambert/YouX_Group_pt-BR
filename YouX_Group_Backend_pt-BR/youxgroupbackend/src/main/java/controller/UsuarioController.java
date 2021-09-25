package controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exception.ResourceNotFoundException;
import model.Paciente;
import model.Usuario;
import repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UsuarioController {
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	// Lista todos os usuários
	@GetMapping("/usuarios")
	public List<Usuario> getAllUsuarios(){
		return usuarioRepository.findAll();
	}		
	
	// Cria um novo usuário via requisição da API
	@PostMapping("/usuários")
	public Usuario createUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
	
	// Pega um usuario via requisição API e id
	@GetMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id) {
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Esse id não corresponde a um usuário:" + id));
		return ResponseEntity.ok(usuario);
	}
	
	// Atualiza os dados de um usuario via requisição da API
	
	@PutMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id, @RequestBody Paciente usuarioDetails){
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Esse id não corresponde a um usuário:" + id));
		
		usuario.setNome(usuarioDetails.getNome());
		usuario.setCpf(usuarioDetails.getCpf());
		usuario.setCargo(usuarioDetails.getCargo());
		// usuario.setSenha;
		
		Usuario updatedUsuario = usuarioRepository.save(usuario);
		return ResponseEntity.ok(updatedUsuario);
	}
	
	// Apaga um usuário via requisição da API
	@DeleteMapping("/usuarios/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUsuario(@PathVariable Long id){
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Esse id não corresponde a um usuário:" + id));
		
		usuarioRepository.delete(usuario);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
} 