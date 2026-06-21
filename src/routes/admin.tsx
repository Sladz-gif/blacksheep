import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  Menu,
  X,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  Clock,
  DollarSign,
  Users as UsersIcon,
  Save,
  Download,
  Database,
} from "lucide-react";

// Mock data for demonstration
const mockArticles = [
  {
    id: 1,
    title: "How Nakpanduri got its borehole back",
    status: "published",
    date: "2026-04-15",
    category: "Water",
  },
  {
    id: 2,
    title: "Salaga's classroom comes back to life",
    status: "published",
    date: "2026-03-22",
    category: "Education",
  },
  {
    id: 3,
    title: "Why the Council of Elders runs our roadmap",
    status: "draft",
    date: "2026-06-18",
    category: "Community",
  },
  {
    id: 4,
    title: "Every cedi, accounted for",
    status: "published",
    date: "2026-01-10",
    category: "Transparency",
  },
];

const mockStats = [
  { label: "Total Articles", value: "24", icon: FileText, color: "text-blue-500" },
  { label: "Community Projects", value: "18", icon: UsersIcon, color: "text-green-500" },
  { label: "Total Donations", value: "GH₵ 1.2M", icon: DollarSign, color: "text-yellow-500" },
  { label: "Pending Tasks", value: "3", icon: Clock, color: "text-orange-500" },
];

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | Black Sheep Foundation GH" },
      { name: "description", content: "Admin dashboard for managing the Black Sheep Foundation GH website." },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [articles, setArticles] = useState(mockArticles);
  const [articleModalOpen, setArticleModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<typeof mockArticles[0] | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveArticle = (article: any) => {
    if (editingArticle) {
      setArticles(articles.map(a => a.id === editingArticle.id ? { ...article, id: editingArticle.id } : a));
      showNotification('success', 'Article updated successfully');
    } else {
      setArticles([...articles, { ...article, id: Date.now() }]);
      showNotification('success', 'Article created successfully');
    }
    setArticleModalOpen(false);
    setEditingArticle(null);
  };

  const handleDeleteArticle = (id: number) => {
    setArticles(articles.filter(a => a.id !== id));
    showNotification('success', 'Article deleted successfully');
  };

  const handleExportData = () => {
    const data = JSON.stringify({ articles }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blacksheep-data.json';
    a.click();
    showNotification('success', 'Data exported successfully');
  };

  const handleBackupDatabase = () => {
    showNotification('success', 'Database backup created successfully');
  };

  return (
    <div className="flex min-h-screen bg-secondary/30">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border p-4 flex items-center justify-between">
        <span className="font-display font-bold">Black Sheep Admin</span>
        <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0">
            <div className="bg-background border-r border-border w-64 min-h-screen flex flex-col">
              <div className="p-6 border-b border-border">
                <Link to="/" className="font-display text-xl font-bold">
                  Black Sheep Admin
                </Link>
              </div>
              
              <nav className="flex-1 p-4">
                <ul className="space-y-2">
                  {[
                    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
                    { id: "articles", label: "Articles", icon: FileText },
                    { id: "projects", label: "Projects", icon: Users },
                    { id: "settings", label: "Settings", icon: Settings },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          activeTab === item.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <item.icon size={20} />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="p-4 border-t border-border">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={16} />
                  Exit to Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 bottom-0 z-40">
        <div className="bg-background border-r border-border w-64 h-screen flex flex-col">
          <div className="p-6 border-b border-border">
            <Link to="/" className="font-display text-xl font-bold">
              Black Sheep Admin
            </Link>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {[
                { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
                { id: "articles", label: "Articles", icon: FileText },
                { id: "projects", label: "Projects", icon: Users },
                { id: "settings", label: "Settings", icon: Settings },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <item.icon size={20} />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-border">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} />
              Exit to Site
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 pt-16 md:pt-0 md:ml-64">
        {activeTab === "dashboard" && (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {mockStats.map((stat, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-secondary`}>
                      <stat.icon size={24} className={stat.color} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Activity</h2>
                <button type="button" className="text-sm text-clay font-medium hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  { action: "New article published", time: "2 hours ago", status: "success" },
                  { action: "Donation received: GH₵ 5,000", time: "Yesterday", status: "success" },
                  { action: "New volunteer registered", time: "2 days ago", status: "success" },
                  { action: "Project updated: Salaga", time: "3 days ago", status: "success" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === "articles" && (
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Articles</h1>
                <p className="text-muted-foreground">Manage your site's articles and stories.</p>
              </div>
              <button type="button" onClick={() => { setEditingArticle(null); setArticleModalOpen(true); }} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                <Plus size={18} />
                New Article
              </button>
            </div>
            
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Title</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {articles.map((article) => (
                      <tr key={article.id} className="hover:bg-secondary/50 transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-medium">{article.title}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary">
                            {article.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            article.status === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {article.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
                          {article.date}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button type="button" onClick={() => { setEditingArticle(article); setArticleModalOpen(true); }} className="p-1.5 hover:bg-secondary rounded transition-colors">
                              <Edit2 size={16} />
                            </button>
                            <button type="button" onClick={() => handleDeleteArticle(article.id)} className="p-1.5 hover:bg-secondary rounded transition-colors text-red-500">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {activeTab === "projects" && (
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Projects</h1>
                <p className="text-muted-foreground">Manage community projects and initiatives.</p>
              </div>
              <button type="button" onClick={() => { setEditingProject(null); setProjectModalOpen(true); }} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                <Plus size={18} />
                New Project
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Nakpanduri Borehole", status: "Completed", progress: 100 },
                { name: "Salaga Learning Center", status: "Active", progress: 85 },
                { name: "Tamale Youth Program", status: "Active", progress: 60 },
              ].map((project, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">{project.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-clay h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => { setEditingProject(project); setProjectModalOpen(true); }} className="flex-1 p-2 border border-border rounded hover:bg-secondary transition-colors">
                      Edit
                    </button>
                    <button type="button" onClick={() => showNotification('success', `Viewing ${project.name}`)} className="flex-1 p-2 border border-border rounded hover:bg-secondary transition-colors">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "settings" && (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground">Manage your site settings and preferences.</p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-background border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Site Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Site Name</label>
                    <input
                      type="text"
                      defaultValue="Black Sheep Foundation GH"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Email</label>
                    <input
                      type="email"
                      defaultValue="hello@blacksheepgh.org"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    />
                  </div>
                  <button type="button" onClick={() => showNotification('success', 'Settings saved successfully')} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
              
              <div className="bg-background border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button type="button" onClick={handleExportData} className="p-4 border border-border rounded-lg hover:bg-secondary transition-colors text-left">
                    <p className="font-medium mb-1 flex items-center gap-2"><Download size={16} /> Export Data</p>
                    <p className="text-sm text-muted-foreground">Download all site content</p>
                  </button>
                  <button type="button" onClick={handleBackupDatabase} className="p-4 border border-border rounded-lg hover:bg-secondary transition-colors text-left">
                    <p className="font-medium mb-1 flex items-center gap-2"><Database size={16} /> Backup Database</p>
                    <p className="text-sm text-muted-foreground">Create a full backup</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Notification */}
      {notification && (
        <div className={`fixed bottom-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg ${
          notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {notification.message}
        </div>
      )}

      {/* Article Modal */}
      {articleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" onClick={() => setArticleModalOpen(false)} />
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl">
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm p-6 border-b border-border flex justify-between items-start">
              <h2 className="text-2xl font-bold">{editingArticle ? 'Edit Article' : 'New Article'}</h2>
              <button onClick={() => setArticleModalOpen(false)} className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              const form = e.currentTarget;
              const titleInput = form.querySelector('[name="title"]') as HTMLInputElement;
              const categorySelect = form.querySelector('[name="category"]') as HTMLSelectElement;
              const statusSelect = form.querySelector('[name="status"]') as HTMLSelectElement;
              handleSaveArticle({ 
                title: titleInput.value, 
                category: categorySelect.value, 
                status: statusSelect.value, 
                date: new Date().toISOString().split('T')[0] 
              }); 
            }} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input name="title" defaultValue={editingArticle?.title} required className="w-full px-4 py-2 border border-border rounded-lg bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select name="category" defaultValue={editingArticle?.category || 'Community'} className="w-full px-4 py-2 border border-border rounded-lg bg-background">
                  <option>Water</option>
                  <option>Education</option>
                  <option>Community</option>
                  <option>Transparency</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select name="status" defaultValue={editingArticle?.status || 'draft'} className="w-full px-4 py-2 border border-border rounded-lg bg-background">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <Save size={16} /> {editingArticle ? 'Update Article' : 'Create Article'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {projectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" onClick={() => setProjectModalOpen(false)} />
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl">
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm p-6 border-b border-border flex justify-between items-start">
              <h2 className="text-2xl font-bold">{editingProject ? 'Edit Project' : 'New Project'}</h2>
              <button onClick={() => setProjectModalOpen(false)} className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              const form = e.currentTarget;
              const nameInput = form.querySelector('[name="name"]') as HTMLInputElement;
              const statusSelect = form.querySelector('[name="status"]') as HTMLSelectElement;
              const progressInput = form.querySelector('[name="progress"]') as HTMLInputElement;
              showNotification('success', editingProject ? 'Project updated successfully' : 'Project created successfully'); 
              setProjectModalOpen(false); 
            }} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Project Name</label>
                <input name="name" defaultValue={editingProject?.name} required className="w-full px-4 py-2 border border-border rounded-lg bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select name="status" defaultValue={editingProject?.status || 'Active'} className="w-full px-4 py-2 border border-border rounded-lg bg-background">
                  <option>Active</option>
                  <option>Completed</option>
                  <option>Planned</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Progress (%)</label>
                <input name="progress" type="number" min="0" max="100" defaultValue={editingProject?.progress || 0} required className="w-full px-4 py-2 border border-border rounded-lg bg-background" />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <Save size={16} /> {editingProject ? 'Update Project' : 'Create Project'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
